<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;

// Route::get('/', function () {
//     sleep(2);
//     return Inertia::render('Home');
// });

// Route::get('/about', function () {
//     return Inertia('About/About');
// });

// Route::inertia('/about', 'About/About', ['name'=>'vaughan']);

Route::get('/', [PostController::class, 'index']);
Route::get('/login', [AuthController::class, 'getLogin'])->name('login');
Route::get('/register', [AuthController::class, 'getRegister'])->name('register');

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('posts', PostController::class)->except('index');
});
