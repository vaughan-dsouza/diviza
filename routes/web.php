<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

// Route::get('/', function () {
//     sleep(2);
//     return Inertia::render('Home');
// });

// Route::get('/about', function () {
//     return Inertia('About/About');
// });

// Route::inertia('/about', 'About/About', ['name'=>'vaughan']);

Route::resource('posts', PostController::class)->except('index');
Route::get('/', [PostController::class, 'index']);