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

        if($request->type === "pro"){
            $request->validate([
                'company' => ['required', 'max:255'],
                'ice' => ['required', 'numeric']
            ]);
        } else {
            $request->validate([
                'fullname' => ['required', 'max:255', 'min:5'],
                'civility' => ['required', 'alpha']
            ]);
        }

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type' => strtolower($request->type),
            'phone' => "0".$request->phone,
            'city' => strtolower($request->city),
            'civility' => $request->civility,
            'fullname' => strtolower($request->fullname),
            'company' => strtolower($request->company),
            'ice' => $request->ice,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();

    }
}
