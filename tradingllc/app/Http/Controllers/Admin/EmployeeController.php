<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Http\Request;

use \App\Modals\User;

use App\Http\Requests\Admin\EmployeeRequest;

use DataTables;

class EmployeeController extends AdminController
{
    protected $repo_service;

    public function __construct( \App\Support\Repository\UserRepository $user_repository )
    {
        $this->repo_service = $user_repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( Request $request ) {
        return view( admin_view( 'employee.manage' ) );
    }

    public function ajaxManageable(Request $request)
    {
        $sort_cols  = getColsByDataable( $request->input( 'columns' ), 'action' );
        $order_cols = ( $sort_cols[ $request->input( 'order.0.column' ) ] ?? 'created_at' );
        $order_by   = ( $request->input( 'order.0.dir' ) ?: 'desc' );

        $data = User::orderBy($order_cols,$order_by)->orderByDesc('updated_at');

        return Datatables::of($data)
         ->addColumn('action', function($row){

             $action = '<a href="'.route(admin_route('employee.edit'), [$row->id]).'" class="btn btn-success btn-sm">Edit</a> ';
             $action .= '<a href="'.route(admin_route('employee.delete'), [$row->id]).'" class="btn btn-danger btn-sm">Delete</a>';

             return $action?:'-';
         })
         ->addIndexColumn()
        ->addColumn('full_name', function ($row) {
            return $row->full_name;
        })
         ->editColumn('is_active', function ($row) {
             return $row->status;
         })
         ->editColumn('created_at', function ($row) {
             return $row->created_date;
         })
         ->editColumn('updated_at', function ($row) {
             return $row->updated_date;
         })
         ->rawColumns(['action', 'full_name', 'is_active'])
         ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return view( admin_view( 'employee.form' ) );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeRequest $request)
    {
        //Redirection when you choose button
        $route_action = route(admin_route('employee.' . $request->formsubmit ));

        $this->repo_service->createOrUpdate( $request, new User );

        $request->session()->flash('alert-message', [
            'status' => 'success',
            'message'=> 'Record has been successfully added'
        ]);
        return redirect( $route_action );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $employee)
    {
        $data = $employee;

        return view( admin_view('employee.form'), compact('data'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeRequest $request, $user_id)
    {
        $user = User::findOrFail($user_id);

        $this->repo_service->createOrUpdate( $request, $user );

        $request->session()->flash('alert-message', [
            'status' => 'success',
            'message'=> 'Record has been successfully updated'
        ]);
        return redirect( route(admin_route('employee.index')) );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id )
    {
        $employee = User::findOrFail($id);
        $employee->delete();

        $request->session()->flash('alert-message', [
            'status' => 'success',
            'message'=> 'Record has been successfully deleted'
        ]);
        return redirect( route(admin_route('employee.index')) );
    }
}
