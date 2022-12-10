<?php namespace App\Modals;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use \App\Support\Services\UserService;

class User extends Authenticatable
{
    use Notifiable;

    static public $USER_TYPE = [
        'ADMIN'    => 0,
        'EMPLOYEE' => 1,
    ];

    static public $storage_disk = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password', 'phone', 'user_type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at'        => 'date:Y-m-d h:i:s',
        'updated_at'        => 'date:Y-m-d h:i:s',
    ];

    public function scopeIsActive( $q ) {
        return $q->where( 'is_active', 1 );
    }

    public function getFullNameAttribute() {
        return "{$this->first_name} {$this->last_name}";
    }

    public function getStatusAttribute() {
        return ($this->is_active == 1 ? 'Active' : 'In Active');
    }

    public function getIsAdminAttribute() {
        return (bool) $this->user_type == self::$USER_TYPE['ADMIN'];
    }

    public static function getLists() {
        return self::where( 'user_type', '<>', 0 )->whereNull('deleted_at')->select( [ \DB::raw( 'concat(first_name, " ", last_name) as name' ), 'id' ] )->get()->pluck( 'name', 'id' )->toArray();
    }

    public static function getEmployeeList() {
        return self::where( 'user_type', self::$USER_TYPE['EMPLOYEE'] )->whereNull('deleted_at')->select( [ \DB::raw( 'concat(first_name, " ", last_name) as name' ), 'id' ] )->get()->pluck( 'name', 'id' )->toArray();
    }

    public function detail() {
        return $this->hasOne( UserDetail::class, 'user_id', 'id' );
    }
}
