<?php namespace App\Http\Controllers\Admin;

class AdminController extends \App\Http\Controllers\Controller
{
    public function __construct() {
        $this->middleware('foradmin');
    }
}
