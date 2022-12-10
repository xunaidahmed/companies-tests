<?php

Route::get('/dashboard', 'DashboardController@index')->name('dashboard');

//For Employees
Route::get('employee/list', 'EmployeeController@ajaxManageable')->name('employee.ajax.manageable');
Route::get('employee/delete/{id}', 'EmployeeController@destroy')->name('employee.delete');
Route::resource('employee', 'EmployeeController', ['except' => ['show']]);
