import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
        <div className="slider">
        <ul>
          <li><img src="https://images.squarespace-cdn.com/content/v1/5b113545ee17595a184efefb/1562759784385-WHJEA7EMYX7P6SXTOAEN/ke17ZwdGBToddI8pDm48kPj2DCVms7d7tLeg9lnusy0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVSLZ3pDcs6UkbaaM_GEiuhAj8XdnoW7ZS3eorGzPJ4rmKrNseFoUIch_0M0QXBgV/stranded+sails+1000x500+with+logo.png" alt="eyes with Makeup" /></li>
          <li><img src="https://www.profolus.com/wp-content/uploads/2021/01/Studies-Playing-Video-Games-Can-Make-You-Smarter.jpg" alt="Makeup" /></li>
          <li><img src="https://www.ntower.de/images/newsPictures/cb/16489-1000-500-cbb39f0b0883848b925717e22510fed536b2f0cb.jpg" alt="Girls wearing makeup" /></li>
        </ul>
      </div>
     
      <section id="exposition">
        <div class="container">
            <img src="" alt="" id=""/>
            <h2>BOGO 50% SALE</h2>
            <p>When you buy these new releases:</p>
        </div>
    </section>
    <section id="bogo">
        <div class="container">
            <div class="games">
                <img src="https://images.pushsquare.com/de5281c1c39c9/crash-bandicoot-4-its-about-time-ps4-playstation-4.900x.jpg" alt="game.pic"/>
                <h3>Crash Bandicoot 4: It's About Time</h3>
                <p>$59.99</p>
            </div>
            <div class="games">
                <img src="https://i.redd.it/iwaps8e8ri451.jpg" alt="game.pic" />
                <h3>Star Wars Squadrons</h3>
                <p>$59.99</p>
            </div>
            <div class="games">
                <img src="https://preview.redd.it/515ldhtdcfc51.png?auto=webp&s=6cf27d2e9e3c10e35c5c2db8cc41b90d53f650ea" alt="game.pic" />
                <h3>FIFA 21</h3>
                <p>$59.99</p>
            </div>
        </div>
    </section>
      </div>
        )
    };