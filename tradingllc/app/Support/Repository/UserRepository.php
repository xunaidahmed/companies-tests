<?php namespace App\Support\Repository;

use \App\Modals\User;
use \App\Modals\UserDetail;

class UserRepository  {

    private $model = null;

	public function __construct(User $user)
    {
        $this->model = $user;
	}

    /*
     * Create Or Update
     *
     * @param Request $request
     * @param User $user
     */
    public function createOrUpdate($request, User $user )
    {
        $phone = ltrim( $request->phone, '+' );

        if( $request->password ) {
            $user->password = \Hash::make( $request->password );
        }

        $user->first_name     = $request->first_name;
        $user->last_name      = $request->last_name;
        $user->email          = $request->email;
        $user->phone          = $phone;
        $user->user_type      = User::$USER_TYPE['EMPLOYEE'];
        $user->remember_token = \Str::random( 30 );
        $user->save();

        UserDetail::updateOrCreate(['user_id' => $user->id],[
            'address'            => $request->address ?: null,
            'extras'             => $request->extras ?: null
        ]);

        return $user;
    }
}
