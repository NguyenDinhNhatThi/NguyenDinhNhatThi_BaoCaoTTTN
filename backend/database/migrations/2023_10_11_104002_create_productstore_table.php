<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('db_product', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('category_id');
            $table->float('price');
            $table->unsignedInteger('qty');           
            $table->timestamps();
            $table->unsignedInteger('create_by')->default(1);
            $table->unsignedInteger('update_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_productstore');
    }
};
