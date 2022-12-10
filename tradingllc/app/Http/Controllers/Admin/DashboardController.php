<?php namespace App\Http\Controllers\Admin;

class DashboardController extends \App\Http\Controllers\Admin\AdminController
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view( admin_view('dashboard') );
    }
}
