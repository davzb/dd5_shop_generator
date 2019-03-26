<template>
    <div id="app">
        <section class="hero is-warning is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ $t('title') }}</h1>
                    <p class="subtitle" v-html="$t('descr')"></p>
                </div>
            </div>
        </section>

        <section class="section hero is-light">
            <div class="container">
                <div class="columns">
                    <div class="column is-two-third">
                        <div class="field">
                            <label><strong>{{ $t('shopSize') }}</strong></label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-size="alim" checked>
                                    {{ $t('alim') }}
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-size="gen">
                                    {{ $t('gen') }}
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-size="blac">
                                    {{ $t('blac') }}
                                </label>
                                <label class="radio">
                                    <input type="radio" name="shopSize" data-size="tav">
                                    {{ $t('tav') }}
                                </label>
                                <label class="radio" disabled>
                                    <input type="radio" name="shopSize" data-size="herb" disabled>
                                    {{ $t('herb') }}
                                </label>
                                <label class="radio" disabled>
                                    <input type="radio" name="shopSize" data-size="alch" disabled>
                                    {{ $t('alch') }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-one-third">
                        <div class="field">
                            <div class="control">
                                <label><strong>{{ $t('nbItems') }}</strong></label>
                                <input class="input" 
                                       id="itemsNbValue" 
                                       type="number" 
                                       :placeholder="$t('nbItems')" 
                                       value="10">
                            </div>
                        </div>
                    </div>
                </div>  

                <div class="field">
                    <div class="control">
                        <input class="button is-dark is-rounded" 
                               type="submit" 
                               :value="$t('submit')" 
                               @click="randomizeMe()"
                               :model="generate">
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" v-if="results">
                    <thead>
                        <tr>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colA') }}</th>
                            <th class="is-7 is-size-7 is-uppercase has-text-left">{{ $t('colB') }}</th>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colC') }}</th>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colD') }}</th>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colE') }}</th>
                            <th class="is-1 is-size-7 is-uppercase">{{ $t('colF') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="result in results" :key="result.id">
                            <td>{{ result.id }}</td>
                            <td class="has-text-left">{{ result.name }}</td>
                            <td>{{ result.qty }}</td>
                            <td>{{ Math.floor(result.price * 0.6) }} {{ result.currency }}</td>
                            <td>{{ result.price }} {{ result.currency }}</td>
                            <td>{{ Math.round(result.price * 1.5) }} {{ result.currency }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
import $ from "jquery";
import {_} from 'vue-underscore';
import axios from "axios";
import allArmes from "../public/armes.json";
import allAmmo from "../public/munitions.json";
import allArmor from "../public/armures.json";
import allBabioles from "../public/babioles.json";
import allEquipements from "../public/equipements.json";
import allMarchandises from "../public/marchandises.json";
import allOutils from "../public/outils.json";
import allAlim from "../public/alimentation.json";

var armes = [];
var ammo = [];
var armor = [];
var babioles = [];
var equipements = [];
var marchandises = [];
var outils = [];
var alimentation = [];

export default {
    name: "app",
    data () {
        return {
            generate: null,
            info: null,
            results: []
        }
    },
    beforeMount () {
        armes.push(allArmes);
        ammo.push(allAmmo);
        armor.push(allArmor);
        babioles.push(allBabioles);
        equipements.push(allEquipements);
        marchandises.push(allMarchandises);
        outils.push(allOutils);
        alimentation.push(allAlim);
    },
    mounted () {
        const currentLang = $('html').attr('lang');

        if (!currentLang) {
            this.$i18n.locale = "en"
        } else {
            this.$i18n.locale = currentLang
        }
    },
    watch : {
        generate : function () {
            this.randomizeMe();
        }
    },
    methods: {
        randomizeMe () {
            let checkedShopSize = $('.radio input:checked').data('size');
            let giveMeItemsVal = $('#itemsNbValue').val();
            let armesPercent, ammoPercent, armorPercent, babiolesPercent, equipementsPercent, marchandisesPercent, outilsPercent, alimPercent;
            let resultsArmes, resultsAmmo, resultsArmor, resultsBabioles, resultsEquipements, resultsMarchandises, resultsOutils, resultsAlim;

            switch (checkedShopSize) {
                case 'alim' : 
                marchandisesPercent = Math.floor(giveMeItemsVal * 1);

                resultsMarchandises = _.sample(marchandises[0], marchandisesPercent);

                this.$data.results = resultsMarchandises;
                this.$data.results = _.shuffle(this.$data.results);
                break

                case 'gen' : 
                armesPercent = Math.round(giveMeItemsVal * 0.1);
                ammoPercent = Math.round(giveMeItemsVal * 0.1);
                outilsPercent = Math.round(giveMeItemsVal * 0.1);
                equipementsPercent = Math.round(giveMeItemsVal * 0.5);
                marchandisesPercent = Math.floor(giveMeItemsVal * 0.2);

                resultsArmes = _.sample(armes[0], armesPercent);
                resultsAmmo = _.sample(ammo[0], ammoPercent);
                resultsOutils = _.sample(outils[0], outilsPercent);
                resultsEquipements = _.sample(equipements[0], equipementsPercent);
                resultsMarchandises = _.sample(marchandises[0], marchandisesPercent);

                this.$data.results = _.union(resultsArmes, 
                                  resultsAmmo, 
                                  resultsOutils, 
                                  resultsEquipements, 
                                  resultsMarchandises);
                this.$data.results = _.shuffle(this.$data.results);
                break

                case 'blac' : 
                armesPercent = Math.round(giveMeItemsVal * 0.4);
                ammoPercent = Math.round(giveMeItemsVal * 0.3);
                armorPercent = Math.round(giveMeItemsVal * 0.2);
                outilsPercent = Math.round(giveMeItemsVal * 0.1);

                resultsArmes = _.sample(armes[0], armesPercent);
                resultsAmmo = _.sample(ammo[0], ammoPercent);
                resultsArmor = _.sample(armor[0], armorPercent);
                resultsOutils = _.sample(outils[0], outilsPercent);

                this.$data.results = _.union(resultsArmes, 
                                  resultsAmmo, 
                                  resultsArmor, 
                                  resultsOutils);
                this.$data.results = _.shuffle(this.$data.results);
                break

                case 'tav' : 
                alimPercent = Math.floor(giveMeItemsVal * 1);

                resultsAlim = _.sample(alimentation[0], alimPercent);

                this.$data.results = resultsAlim;
                this.$data.results = _.shuffle(this.$data.results);
                break

                case 'herb' : 
                console.log('not implemented yet');
                break

                case 'alch' : 
                console.log('not implemented yet');
                break
            }
        }
    }
};
</script>

<style lang="scss">
    .table {
        tr {
            td, th { 
                text-align: center;
                vertical-align: middle;

                &.is-1 { width: 8.33333%; }
                &.is-7 { width: 58.33333%; }
            }
        }
    }
</style>

<i18n>
en:
    title: "White Bear Shop"
    descr: "Welcome traveler!<br>I am <strong>Wiggens Raulnor</strong>, you are in my humble shop, in exchange of gold you can buy:"
    shopSize: "Size of the shop"
    alim: "Food merchant"
    gen: "General goods"
    blac: "Blacksmith"
    herb: "Apothecary"
    tav: "Tavern"
    alch: "Alchemist"
    nbItems: "Number of items"
    submit: "Generate"
    colA: "Category"
    colB: "Name"
    colC: "Qty"
    colD: "- Price"
    colE: "Price"
    colF: "+ Price"
fr:
    title: "La boutique de l'Ours Blanc"
    descr: "Bienvenue aventuriers !<br>Je suis <strong>Wiggens Raulnor</strong>, vous êtes dans ma modeste échoppe, contre votre or vous pouvez acheter :"
    shopSize: "Taille de la boutique"
    alim: "Alimentation"
    gen: "Généraliste"
    blac: "Forgeron"
    herb: "Apothicaire"
    tav: "Taverne"
    alch: "Alchimiste"
    nbItems: "Nombre d'articles"
    submit: "Générer"
    colA: "Catégorie"
    colB: "Nom"
    colC: "Qté"
    colD: "Prix -"
    colE: "Prix"
    colF: "Prix +"
</i18n>
