<?php namespace App\Modals;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $table = 'user_details';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'address', 'extras'
    ];

    /**
     * The attributes that should be cast.
     * @var array
     */
    protected $casts = [
        'extras' => 'array'
    ];

    public function user() {
        return $this->belongsTo( User::class );
    }
}
