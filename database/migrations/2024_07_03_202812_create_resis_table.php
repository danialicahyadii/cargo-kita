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
        Schema::create('resis', function (Blueprint $table) {
            $table->id();
            $table->string('no_resi');
            $table->string('nama_pengirim');
            $table->string('alamat_pengirim');
            $table->string('no_hp_pengirim')->nullable();
            $table->string('nama_penerima');
            $table->string('alamat_penerima');
            $table->string('no_hp_penerima')->nullable();
            $table->string('isi_kiriman');
            $table->string('berat_asli');
            $table->string('berat_volume');
            $table->string('qty');
            $table->string('biaya_kirim');
            $table->string('biaya_packing')->nullable();
            $table->string('biaya_asuransi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resis');
    }
};
