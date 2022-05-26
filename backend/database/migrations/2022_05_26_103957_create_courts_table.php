<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCourtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });
        DB::table('courts')->insert(array(
            ["id" => 1, "name" => "AGADIR (Tribunal de Commerce)"], 
            ["id" => 2, "name" => "ALHOCEIMA (Tribunal de 1ère Instance)"], 
            ["id" => 3, "name" => "ASILAH (Tribunal de 1ère Instance)"], 
            ["id" => 4, "name" => "AZILAL (Tribunal de 1ère Instance)"], 
            ["id" => 5, "name" => "AZROU (Tribunal de 1ère Instance)"], 
            ["id" => 6, "name" => "BEN AHMED (Tribunal de 1ère Instance)"], 
            ["id" => 7, "name" => "BENGUERIR (Tribunal de 1ère Instance)"], 
            ["id" => 8, "name" => "BENI MELLAL (Tribunal de 1ère Instance)"], 
            ["id" => 9, "name" => "BEN SLIMANE (Tribunal de 1ère Instance)"], 
            ["id" => 10, "name" => "BERKANE (Tribunal de 1ère Instance)"], 
            ["id" => 11, "name" => "BERRECHID (Tribunal de 1ère Instance)"], 
            ["id" => 12, "name" => "BOUARFA (Tribunal de 1ère Instance)"], 
            ["id" => 13, "name" => "BOUJAAD (Tribunal de 1ère Instance)"], 
            ["id" => 14, "name" => "BOULMANE (Tribunal de 1ère Instance)"], 
            ["id" => 15, "name" => "CASABLANCA (Tribunal de Commerce)"], 
            ["id" => 16, "name" => "CHEFCHAOUEN (Tribunal de 1ère Instance)"], 
            ["id" => 17, "name" => "DRIOUCH (Tribunal de Commerce)"], 
            ["id" => 18, "name" => "ELJADIDA (Tribunal de 1ère Instance)"], 
            ["id" => 19, "name" => "ERRACHIDIA (Tribunal de 1ère Instance)"], 
            ["id" => 20, "name" => "ESSAOUIRA (Tribunal de 1ère Instance)"], 
            ["id" => 21, "name" => "ESSMARA (Tribunal de 1ère Instance)"], 
            ["id" => 22, "name" => "FES (Tribunal de Commerce)"], 
            ["id" => 23, "name" => "FKIH BEN SALLAH (Tribunal de 1ère Instance)"],
            ["id" => 24, "name" => "GUELMIM (Tribunal de 1ère Instance)"], 
            ["id" => 25, "name" => "GUERCIF (Tribunal de 1ère Instance)"], 
            ["id" => 26, "name" => "IMINTANOUTE (Tribunal de 1ère Instance)"],
            ["id" => 27, "name" => "INZEGANE (Tribunal de 1ère Instance)"], 
            ["id" => 28, "name" => "KASBA TADLA (Tribunal de 1ère Instance)"], 
            ["id" => 29, "name" => "KELAA SRAGHNA (Tribunal de 1ère Instance)"],
            ["id" => 30, "name" => "KENITRA (Tribunal de 1ère Instance)"], 
            ["id" => 31, "name" => "KHEMISSET (Tribunal de 1ère Instance)"], 
            ["id" => 32, "name" => "KHENIFRA (Tribunal de 1ère Instance)"],
            ["id" => 33, "name" => "KHOURIBGA (Tribunal de 1ère Instance)"],
            ["id" => 34, "name" => "KSAR KEBIR (Tribunal de 1ère Instance)"],
            ["id" => 35, "name" => "LAAYOUNE (Tribunal de 1ère Instance)"],
            ["id" => 36, "name" => "LARACHE (Tribunal de 1ère Instance)"],
            ["id" => 37, "name" => "MARRAKECH (Tribunal de Commerce)"], 
            ["id" => 38, "name" => "MECHRA BEL KSIRI (Tribunal de 1ère Instance)"],
            ["id" => 39, "name" => "MEKNES (Tribunal de Commerce)"], 
            ["id" => 40, "name" => "MIDELT (Tribunal de 1ère Instance)"], 
            ["id" => 41, "name" => "MISSOUR (Tribunal de 1ère Instance)"], 
            ["id" => 42, "name" => "MOHAMMEDIA (Tribunal de 1ère Instance)"], 
            ["id" => 43, "name" => "NADOR (Tribunal de 1ère Instance)"], 
            ["id" => 44, "name" => "OUARZAZATE (Tribunal de 1ère Instance)"], 
            ["id" => 45, "name" => "OUAZZANE (Tribunal de 1ère Instance)"], 
            ["id" => 46, "name" => "OUED EDDAHAB (DAKHLA) (Tribunal de 1ère Instance)"], 
            ["id" => 47, "name" => "OUED ZEM (Tribunal de 1ère Instance)"], 
            ["id" => 48, "name" => "OUJDA (Tribunal de Commerce)"], 
            ["id" => 49, "name" => "RABAT (Tribunal de Commerce)"], 
            ["id" => 50, "name" => "ROMMANI (Tribunal de 1ère Instance)"], 
            ["id" => 51, "name" => "SAFI (Tribunal de 1ère Instance)"], 
            ["id" => 52, "name" => "SALE (Tribunal de 1ère Instance)"],
            ["id" => 53, "name" => "SEFROU (Tribunal de 1ère Instance)"],
            ["id" => 54, "name" => "SETTAT (Tribunal de 1ère Instance)"],
            ["id" => 55, "name" => "SIDI BENNOUR (Tribunal de 1ère Instance)"],
            ["id" => 56, "name" => "SIDI KACEM (Tribunal de 1ère Instance)"], 
            ["id" => 57, "name" => "SIDI SLIMANE (Tribunal de 1ère Instance)"], 
            ["id" => 58, "name" => "SOUK LARBAA (Tribunal de 1ère Instance)"], 
            ["id" => 59, "name" => "SOUK SEBT OULED NEMMA (Tribunal de 1ère Instance)"], 
            ["id" => 60, "name" => "TANGER (Tribunal de Commerce)"], 
            ["id" => 61, "name" => "TANTAN (Tribunal de 1ère Instance)"],
            ["id" => 62, "name" => "TAOUNAT (Tribunal de 1ère Instance)"], 
            ["id" => 63, "name" => "TAOURIRT (Tribunal de 1ère Instance)"],
            ["id" => 64, "name" => "TARGUIST (Tribunal de 1ère Instance)"], 
            ["id" => 65, "name" => "TAROUDANT (Tribunal de 1ère Instance)"], 
            ["id" => 66, "name" => "TATA (Tribunal de 1ère Instance)"],
            ["id" => 67, "name" => "TAZA (Tribunal de 1ère Instance)"], 
            ["id" => 68, "name" => "TEMARA (Tribunal de 1ère Instance)"],
            ["id" => 69, "name" => "TETOUAN (Tribunal de 1ère Instance)"],
            ["id" => 70, "name" => "TIFLET (Tribunal de 1ère Instance)"], 
            ["id" => 71, "name" => "TINGHIR (Tribunal de 1ère Instance)"], 
            ["id" => 72, "name" => "TIZNIT (Tribunal de 1ère Instance)"], 
            ["id" => 73, "name" => "YOUSSOUFIA (Tribunal de 1ère Instance)"],
            ["id" => 74, "name" => "ZAGORA (Tribunal de 1ère Instance)"]
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courts');
    }
}
