<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('auth')->as('auth.')->group(function() {
    Route::view('dashboard', 'auth.dashboard')->name('dashboard');
    Route::view('profile', 'auth.profile')->name('profile');
});


