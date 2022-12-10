<?php
//============================================================+
// File name    : For Theme.php
// Created At   : 2022-11

// Description  : Theme includes a variety of global "helper" PHP functions.
// @Author      : Junaid Ahmed
// @github      : https://github.com/xunaidahmed
// -------------------------------------------------------------------

function validate_errors( $errors ) {

    if( count($errors) ) {
        return array_map(function($v){ return $v[0]; }, $errors);
    }

    return [];
}

function isAdmin()  {
    return auth()->guard('admin')->check();
}

function admin_layout( $view ) {
	return sprintf("admin.layouts.%s", $view );
}

function admin_asset( $file ) {
    return asset( sprintf("/adminlite/%s/", ltrim($file,'/') ) );
}

function admin_view( $view ) {
	return sprintf("admin.%s", $view );
}

function admin_route( $route ) {
    return sprintf("admin.%s", $route );
}

/*
 *  Get Datatable Search Columns
 * - - - - - - - - - - - - - - -
 *
 * */
if ( !function_exists('getColsByDataable') )
{
    function getColsByDataable( $search_cols, $excepts_cols = null )
    {
        $excepts_cols = array_filter( is_array( $excepts_cols ) ? $excepts_cols : [ $excepts_cols ] );
        $search_cols  = array_column( $search_cols, 'name' );

        return array_diff($search_cols, $excepts_cols);
    }
}
