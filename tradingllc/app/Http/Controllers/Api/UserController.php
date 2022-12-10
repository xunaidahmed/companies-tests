<?php namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use \App\Support\Repository\UserRepository;

use \App\Modals\User;
use Illuminate\Support\Facades\Auth;

class UserController extends \App\Http\Controllers\ApiController
{
    protected $user_repository;

    public function __construct( UserRepository $user_repository ) {
        $this->user_repository = $user_repository;
    }

    public function lists()
    {
        $lists_employees = User::whereUserType(User::$USER_TYPE['EMPLOYEE'])->get();

        return response()->json( [
            'status' => 200,
            'message' => 'List of employees',
            'collections' => $lists_employees,
        ]);
    }

    public function detail(Request $request, $user_id)
    {
        $lists_employees = User::where('id',$user_id)->whereUserType(User::$USER_TYPE['EMPLOYEE'])->first();

        return response()->json( [
            'status' => 200,
            'message' => 'View employee details',
            'collections' => $lists_employees,
        ]);
    }

    public function register(Request $request )
    {
        $validator = \Validator::make( $request->all(), [
            'first_name' => 'required|string|max:20',
            'last_name'  => 'required|string|max:20',
            'email'      => 'required|email|max:20|unique:App\Modals\User,email',
            'password'   => 'required|max:20',
            'phone'      => 'required|max:20',
            'address'    => 'max:250',
        ]);

        if ( $validator->fails() )
        {
            return response()->json( [
                'status'    => 400,
                'message'   => validate_errors( $validator->getMessageBag()->toArray() )
            ]);
        }

        $this->user_repository->createOrUpdate($request, new User);

        return response()->json( [
            'status' => 200,
            'message' => 'Your account has been successfully created.',
        ]);
    }

    public function login(Request $request )
    {
        $validator = \Validator::make( $request->all(), [
            'email'      => 'required|email|exists:App\Modals\User,email,deleted_at,NULL',
            'password'   => 'required|max:20',
        ]);

        if ( $validator->fails() )
        {
            return response()->json( [
                'status'    => 400,
                'message'   => validate_errors( $validator->getMessageBag()->toArray() )
            ]);
        }

        $credentials              = $request->all();
        $credentials['user_type'] = User::$USER_TYPE['EMPLOYEE'];
        //$credentials['is_active'] = 1;

        $user = User::whereEmail($request->email)->first();

        if ( !\Hash::check($request->password, $user->password))
        {
            return response()->json( [
                'status' => 200,
                'message' => 'Invalid credentials.',
            ]);
        }

        auth()->login($user);

        return response()->json( [
            'status'     => 200,
            'message'    => 'Your account has been login succesfully.',
            'collection' => $user
        ]);
    }
}
