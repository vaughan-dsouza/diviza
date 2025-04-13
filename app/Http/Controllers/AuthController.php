<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function getLogin()
    {
       return inertia('Auth/Login');
    }

    public function register(Request $request){
        $fields = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        $fields['password'] = Hash::make($fields['password']);
        $user = User::create($fields);
        $token = $user->createToken($request->name);

        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function login(Request $request){
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password))
        {
            return response()->json([
                'message' => 'The provided credentials are incorrect.'
            ], 422);
            
        }
        //remove later
        $user->tokens()->delete();

        $token = $user->createToken($user->name)->plainTextToken;

        return [
            'user' => $user,
            'token' => $token
        ];
    }

    public function logout(Request $request){

        $request->user()->currentAccessToken()->delete();
        //since at login you delete the previous token
        //$request->user()->tokens()->delete();

        return[
            'message' => 'you are logged out.'
        ];
    }

}
