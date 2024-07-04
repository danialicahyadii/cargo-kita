<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resi>
 */
class ResiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'no_resi'=> fake()->randomElement(['23024H005', '23024H009', '23024H010']),
            'nama_pengirim' => fake()->sentence(),
            'alamat_pengirim' => fake()->realText(),
            'no_hp_pengirim' => fake()->phoneNumber(),
            'nama_penerima' => fake()->sentence(),
            'alamat_penerima' => fake()->realText(),
            'no_hp_penerima' => fake()->phoneNumber(),
            'isi_kiriman' => fake()->randomElement(['pakaian','kulkas', 'bubuk', 'rak piring']),
            'berat_volume' => fake()->numberBetween(20,100),
            'berat_asli' => fake()->numberBetween(20,100),
            'qty' => fake()->numberBetween(1,10),
            'biaya_kirim' => fake()->randomElement(['432000', '523000', '272000']),
            'biaya_packing' => 50000,
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
