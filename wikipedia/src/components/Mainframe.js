import React from 'react';
import './Mainframe.css';
import { AiOutlineZhihu, AiOutlineDown } from 'react-icons/ai';

const Mainframe = () => {
  return (
    <div className='mainframe-container'>
        <div className='title'>
            <h1>MissingNo.</h1>
            <p>
                < AiOutlineZhihu />
                26 languages
                < AiOutlineDown />
            </p>
        </div>
        <hr />
        <div className='menu-items'>
          <div className='menu-left-items'>
            <a href='#'>Article</a>
            <a href='#'> Talk</a>
          </div>
          <div className='menu-right-items'>
            <a href='#'>Read</a>
            <a href='#'>Edit</a>
            <a href='#'>View history</a>
            <a href='#'>Tools < AiOutlineDown /></a>
          </div>
        </div>
        <hr />
        <div className='content-information'>
        <div className='content-info-card'>
            <p>MissingNo.</p>
            <div className='card'>
              <img src={require('../images/Missingno.png')} alt='MissingNo Card' />
              <p>The player encountering MissingNo. in Pokemon Red</p>
              <table>
                <tr>
                  <th>Date discovered</th>
                  <th>May 1999 (first documented by <a href='#'>Nintendo Power</a>)</th>
                </tr>
                <tr>
                  <th>Affected hardware</th>
                  <th><a href='#'>Game Boy</a></th>
                </tr>
                <tr>
                  <th>Affected software</th>
                  <th><a href='#'>Pokemon Red and Blue</a></th>
                </tr>
                <tr>
                  <th>Website</th>
                  <th><a href='#'>MissingNo. in Nintendo.com</a></th>
                </tr>
              </table>
            </div>
          </div>
          <p>
            MissingNo. (Japanese: けつばん[1], Hepburn: Ketsuban), short for "Missing Number" and sometimes spelled without the period, is an unofficial Pokémon species found in the video games Pokémon Red and Blue. Due to the programming of certain in-game events, players can encounter MissingNo. via a glitch. It is noted as one of the most famous video game glitches of all time.
<br />
Encountering MissingNo. causes graphical anomalies and changes gameplay by increasing the number of items in the sixth entry of the player's inventory by 128. This beneficial effect resulted in the glitch's coverage by strategy guides and game magazines, while game publisher Nintendo warned that encountering the glitch may corrupt players' game data. IGN noted MissingNo.'s appearance in Pokémon Red and Blue was one of the most famous video game glitches and commented on its role in increasing the series' popularity. Fans have attempted to rationalize and incorporate MissingNo. as part of the games' canon as an actual in-game character, and sociologists have studied its impact on both players and gaming culture as a whole. 
          </p>
          <span className='sub-content'>
              <h3>History [<button className='edit' type='button'>edit</button>]</h3>
          </span>
          <hr />
          <p>
            Developed by Game Freak and published by Nintendo, the Pokémon series began in Japan in 1996 with the release of the Pokémon Red and Blue video games for the Game Boy. In these games, the player assumes the role of a Pokémon Trainer whose goal is to capture and train creatures called Pokémon. Players use the creatures' special abilities to combat other Pokémon,[2][3] and certain abilities also grant new ways to navigate the game's world, such as instantaneous travel between two areas.[4] The ultimate goal of the games is to complete the entries in the Pokémon index (Pokédex), a comprehensive Pokémon encyclopedia, by capturing, evolving, and trading to obtain creatures from all 151 Pokémon species.[5]
  <br/>
  MissingNo. is not one of the official Pokémon species that players are meant to encounter, but it is accessible to players of European and North American copies of the games by a glitch. Nintendo of America first documented the events that cause MissingNo. to appear in the May 1999 issue of Nintendo Power. The company warned that "any contact with it (even if you don't catch it) could easily erase your game file or disrupt your graphics".[6] Game developers did not remove several glitches from the 2016 re-releases[7] of Pokémon Red and Blue on the Nintendo 3DS Virtual Console, and players can encounter MissingNo. in these versions of the games.[8] 
          </p>
          <span className='sub-content'>
              <h3>Characteristics [<button className='edit' type='button'>edit</button>]</h3>
          </span>
          <div className='content-info-card card'>
            <img src={require('../images/Cinnabar_Island_Coast.png')} />
            <p>The player using a Pokemon to surf on the eastern shore of Cinnabar Island, a key component for activating the glitch</p>
          </div>
          <p>
          A player can encounter a MissingNo. in Pokémon Red and Blue by following a series of steps. First, the player watches an in-game tutorial for Pokémon capture in the game's Viridian City location. Second, the player uses a Pokémon with the "Fly" ability to instantly travel to the game's Cinnabar Island location. Finally, the player uses a Pokémon with the "Surf" ability to travel up and down the eastern shore of the island until a MissingNo. appears.[9]
  <br/>
  These events manipulate the game's random encounter system to generate a Pokémon with an invalid identifier. Each area within the game assigns values to a data buffer to represent the Pokémon that can be encountered in that area. However, some areas—such as Cinnabar Island—do not overwrite the data in this buffer, so the data from the previous area is used instead. During the Viridian City in-game tutorial, the player character's name is temporarily overridden to read "OLD MAN", and the player character's actual name is temporarily copied to that same data buffer. If the player travels directly to Cinnabar Island after viewing this tutorial, the player character's name will be read as the Pokémon that can be randomly encountered in that area. Due to the player character's name not being intended to be read as this kind of data, the game can attempt to generate an encounter with a Pokémon with an invalid identifier, such as MissingNo.[10][11] Fans have dubbed this method of encountering MissingNo. the "old man glitch".[10][12]
  <br/>
  As with any wild Pokémon, players may flee from, fight, or capture MissingNo.[11] After an encounter with MissingNo., the quantity of the sixth item in the player's inventory is increased by 128,[13] and the game's Hall of Fame Pokémon gallery becomes glitched.[12] Temporary graphical glitches may also occur,[12] which can be removed by viewing the statistics page for another non-glitched Pokémon or resetting the console.[14]
  <br/>
  A captured MissingNo. is functional as a Pokémon and appears in the games' Pokédex as number 000.[10][11] The games classify it as a hybrid Bird/Normal-type Pokémon even though the category of Bird-type Pokémon was cut from the games before release.[10][15] It commonly appears with a scrambled block-like form commonly described as a "backward L-shape", but depending on the player character's name, it can also appear as one of three ghost or fossil sprites not used by other Pokémon.[14][16] 
          </p>
          <span className='sub-content'>
              <h3>Reaction and reception [<button className='edit' type='button'>edit</button>]</h3>
          </span>
          <hr/>
          <p>
          Calling MissingNo. a "programming quirk", Nintendo warned against encountering it, saying players could possibly have to restart the game from the beginning to remove the graphical glitches.[6][17][18] Despite Nintendo's warning, information on how to encounter MissingNo. was printed in several magazines and player's guides due to its perceived positive effect.[18][19][20] Certain players attempted to sell tips on capturing MissingNo. for up to $200.[21]
  <br/>
  Despite it not being an intentional part of the game, in 2009, IGN included MissingNo. in its list of the top video game Easter eggs, citing its usefulness in replicating the game's rarer items[22] and in a later article, calling it an "unforgettable" glitch that helped push the original games to "gaming super stardom".[23] The book 100 Greatest Video Game Characters describes MissingNo. as an example of a player-produced character and counterplay, adding, "as a cultural artifact, MissingNo[.] celebrates the creativity of deviant and subversive forms of play".[11] Some fans have even created costumes based on MissingNo.[12]
  <br/>
  Several sociological studies have been published examining MissingNo. alongside other famous video game glitches on how they impact the player's perception of the game.[24][25] A 2007 paper, co-authored by sociologist William Sims Bainbridge and his daughter Wilma Bainbridge, then a cognitive science student, refers to MissingNo. as "one of the most popular glitches ever in game history".[26] In a 2019 comment provided to Ars Technica, Wilma Bainbridge, then a post-doctoral fellow at the National Institute of Mental Health, expressed her belief that MissingNo. helped contribute to the widespread interest in glitch hunting and speedrunning in video games.[12] Alternatively in the book Pikachu's Global Adventure: The Rise and Fall of Pokémon, professor of education Julian Sefton-Green noticed that in his study of his son's reaction to MissingNo.'s usage as a cheat, the child's outlook towards the game was altered drastically, and added that the presence of such elements, as a result, broke the illusion of the game as an enclosed world and reminded him that "at heart, it is a computer program".[27]
  <br/>
  The 2008 book Playing with Videogames discusses how players compare notes on MissingNo. and to assess and critique each other's findings. James Newman, the author, commented that unusually MissingNo. caused players to celebrate the game's imperfections.[28] In a 2017 article, University of Portsmouth professor Lincoln Geraghty examined fan theories that the glitch was a cut Pokémon related to the Pokémon Kangaskhan and Cubone, describing the theory as "an established work of fanon".[29] He further elaborated in a 2019 Ars Technica article that "fans' desire to incorporate MissingNo[.] into the Pokémon world stems partly from a hope that the glitch may have been deliberate", as well as to compensate for the glitch's lack of backstory within Pokémon canon.[12] In the same article, Newman argued that the existence of such fan theories "reveals a belief in the fundamental reality of Pokémon as entities that are given an opportunity to show themselves through the game, rather than being constructed out of code".[12]
  <br/>
  The game Vampire Survivors added a playable character named "missingNo." which featured randomized stats and a glitched graphical appearance. Originally only unlockable by modifying the game's code, a method was later added requiring the player to enter a glitched location and kill at least 128 of the enemies that spawned there as another reference to the original glitch.[30] 
          </p>
        </div>
        </div>
  );
}

export default Mainframe;
