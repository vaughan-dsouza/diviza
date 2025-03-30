<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(2);
    return Inertia::render('Home');
});

// Route::get('/about', function () {
//     return Inertia('About/About');
// });
Route::inertia('/about', 'About/About', ['name'=>'vaughan']);