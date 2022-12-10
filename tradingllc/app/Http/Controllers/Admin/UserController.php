<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Http\Request;

use \App\Support\Services\UserService;

class UserController extends AdminController
{
    protected $repo_service;
}
