<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string("name");
        });
        DB::table("cities")->insert(
        array(
            ["id" => 1, "name" => "agadir"],
            ["id" => 2, "name" => "al hoceima"],
            ["id" => 3, "name" => "azilal"],
            ["id" => 4, "name" => "beni mellal"],
            ["id" => 5, "name" => "ben slimane"],
            ["id" => 6, "name" => "boulemane"],
            ["id" => 7, "name" => "casablanca"],
            ["id" => 8, "name" => "chaouen"],
            ["id" => 9, "name" => "el jadida"],
            ["id" => 10, "name" => "el kelaa des sraghna"],
            ["id" => 11, "name" => "er rachidia"],
            ["id" => 12, "name" => "essaouira"],
            ["id" => 13, "name" => "fes"],
            ["id" => 14, "name" => "figuig"],
            ["id" => 15, "name" => "guelmim"],
            ["id" => 16, "name" => "ifrane"],
            ["id" => 17, "name" => "kenitra"],
            ["id" => 18, "name" => "khemisset"],
            ["id" => 19, "name" => "khenifra"],
            ["id" => 20, "name" => "khouribga"],
            ["id" => 21, "name" => "laayoune"],
            ["id" => 22, "name" => "larache"],
            ["id" => 23, "name" => "marrakech"],
            ["id" => 24, "name" => "meknes"],
            ["id" => 25, "name" => "nador"],
            ["id" => 26, "name" => "ouarzazate"],
            ["id" => 27, "name" => "oujda"],
            ["id" => 28, "name" => "rabat-sale"],
            ["id" => 29, "name" => "safi"],
            ["id" => 30, "name" => "settat"],
            ["id" => 31, "name" => "sidi kacem"],
            ["id" => 32, "name" => "tangier"],
            ["id" => 33, "name" => "tan-tan"],
            ["id" => 34, "name" => "taounate"],
            ["id" => 35, "name" => "taroudannt"],
            ["id" => 36, "name" => "tata"],
            ["id" => 37, "name" => "taza"],
            ["id" => 38, "name" => "tetouan"],
            ["id" => 39, "name" => "tiznit"],
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
    }
}
