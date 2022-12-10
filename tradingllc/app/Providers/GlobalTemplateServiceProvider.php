<?php namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class GlobalTemplateServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $site_settings = [];

        view()->composer('admin.layouts.master', function($view) use($site_settings) {
            $view->with('auth', Auth::guard('admin')->user());
        });

        view()->composer('admin.*', function($view) use($site_settings) {
            $view->with('site_settings', $site_settings );
        });
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
