<?php

use Illuminate\Support\Facades\{
    Auth,
    Route
};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

/*
|-------------------------------------------------------------------------
| Admin Routes
|-------------------------------------------------------------------------
*/

//Authentication
Route::prefix('admin')->name('admin.')->namespace('Admin')->group(function () {

    Route::get('login', 'AdminAuthController@showLoginForm')->name('login');
    Route::post('login', 'AdminAuthController@login')->name('login');
    Route::get('logout', 'AdminAuthController@logout')->name('logout');
});

Route::prefix('admin')->name('admin.')->namespace('Admin')->middleware('foradmin')->group(function () {
    require('provider.php');
});


/*
|-------------------------------------------------------------------------
| Frontend Routes
|-------------------------------------------------------------------------
|
*/
Route::name('front.')->group(function () {
    Route::get('/', 'HomeController@index')->name('home');
});

/*
|-------------------------------------------------------------------------
| Developers Routes
|-------------------------------------------------------------------------
|
*/
Route::prefix('dev')->name('dev.')->group(function ()
{
    Route::get('/debug', function() {
        dd(bcrypt('welcome@123'));
    });
});

/*
|-------------------------------------------------------------------------
| Developers Routes
|-------------------------------------------------------------------------
|
*/
Route::prefix('api')->name('api.')->group(function (){

    Route::get('/emplyee/lists', '\App\Http\Controllers\Api\UserController@lists');
    Route::get('/emplyee/detail/{user_id}', '\App\Http\Controllers\Api\UserController@detail');

    Route::post('/emplyee/register', '\App\Http\Controllers\Api\UserController@register');
    Route::post('/emplyee/login', '\App\Http\Controllers\Api\UserController@login');
});


