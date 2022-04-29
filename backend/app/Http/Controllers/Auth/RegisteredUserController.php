<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;


class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'type' => ["required", "string"],
            'city' => ['required', 'string'],
            'phone' => ['required', 'string', "numeric"],
        ]);
        // $validator = Validator::make($request->all(), [
        //     'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        //     'type' => ["required", "string"],
        //     'city' => ['required', 'string'],
        //     'phone' => ['required', 'string', "numeric"],
        // ]);
        // if($validator->fails()){
        //     return response()->json(['errors' => $validator->messages(), "phone" => $request->phone]);
        // } else {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'type' => $request->type,
                'phone' => $request->phone,
                'city' => $request->city,
                'civility' => $request->civility,
                'fullname' => $request->fullname,
                'company' => $request->company,
                'ice' => $request->ice,
            ]);
    
            event(new Registered($user));
    
            Auth::login($user);
    
            return response()->noContent();

        //}
    }
}
