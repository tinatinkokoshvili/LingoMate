import React from 'react';

function Languages({
    speaklanguages,
    learnlanguages,
}) {
    return (
       <>
       <div className='languages-box'>
       <div className="languages-title">
            <h1>Languages</h1>
        </div>
        <div className='languages-content'>
        <table className='languages-table'>
         <tr className='lang-speak'>

            <th className='speak-title' style={{textAlign: 'left', fontWeight: 'bold', }}>What I speak</th>
            <td className='lang-speak-list' >
                {/* <img src="https://www.countryflags.io/sn/flat/64.png" className='nationality-flag'></img> */}
                <p className='speak-lang-item'>{speaklanguages[0]} </p>
                {/* <img src="https://www.countryflags.io/sn/flat/64.png" className='nationality-flag'></img> */}
                <p className='speak-lang-item'>{speaklanguages[1]} </p>
            </td>
         </tr>
         <tr className='lang-learn'>
            <th className='learn-title' style={{textAlign: 'left', fontWeight: 'bold',}}>What I want to learn</th>
            <td className='lang-learn-list' >
                {/* <img src="https://www.countryflags.io/sn/flat/64.png" className='nationality-flag'></img> */}
                <p className='learn-lang-item'>{learnlanguages[0]} </p>
                {/* <img src="https://www.countryflags.io/sn/flat/64.png" className='nationality-flag'></img>  */}
                <p className='learn-lang-item'>{learnlanguages[1]} </p>
            </td>
         </tr>
      </table>
        </div>
       </div>
       </>
    );
}

export default Languages;
