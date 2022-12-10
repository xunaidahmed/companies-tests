<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //Utilities Helpers:: Register the application services.
        if( \File::isDirectory( app_path('Support/Helpers')) )
        {
            foreach ( glob(app_path('Support/Helpers/*.php')) as $file) {
                require_once( $file );
            }
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
