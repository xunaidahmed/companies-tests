<?php namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function rules()
    {
        $user_id = \Request::segment(3);

        $rules = [
            'first_name'   => 'required|max:15',
            'last_name'    => 'required|max:15',
            'email'        => 'required|email|max:50|unique:App\Modals\User,email,NULL,id,deleted_at,NULL',
            'phone'        => 'required|max:20',
            'address'      => 'required|max:255',
        ];

        switch ($this->method()) {
            case 'PUT':

                $rules['email'] = 'required|email|max:50|unique:App\Modals\User,email,NULL,id,deleted_at,' . $user_id;

                if ($this->password) {
                    $rules['password'] = 'min:8|max:20';
                }

                break;
            default:
                $rules['password'] = 'required|min:8|max:20';
            break;
        }

        return $rules;
    }
}
