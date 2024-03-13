import './IPA_chart.css';
import sound_p from './IPA_audio/Voiceless_bilabial_plosive.ogg'
import sound_b from './IPA_audio/Voiced_bilabial_plosive.ogg'
import sound_t from './IPA_audio/Voiceless_alveolar_plosive.ogg'
import sound_d from './IPA_audio/Voiced_alveolar_plosive.ogg'
import sound_k from './IPA_audio/Voiceless_velar_plosive.ogg'
import sound_g from './IPA_audio/Voiced_velar_plosive_02.ogg'
import sound_ʔ from './IPA_audio/Glottal_stop.ogg'
import sound_m from './IPA_audio/Bilabial_nasal.ogg'
import sound_n from './IPA_audio/Alveolar_nasal.ogg'
import sound_ŋ from './IPA_audio/Velar_nasal.ogg'
import sound_ɾ from './IPA_audio/Alveolar_tap.ogg'
import sound_tʃ from './IPA_audio/Voiceless_palato-alveolar_affricate.ogg'
import sound_dʒ from './IPA_audio/Voiced_palato-alveolar_affricate.ogg'
import sound_f from './IPA_audio/Voiceless_labio-dental_fricative.ogg'
import sound_v from './IPA_audio/Voiced_labio-dental_fricative.ogg'
import sound_θ from './IPA_audio/Voiced_dental_fricative.ogg'
import sound_ð from './IPA_audio/Voiceless_dental_fricative.ogg'
import sound_s from './IPA_audio/Voiceless_alveolar_sibilant.ogg'
import sound_z from './IPA_audio/Voiced_alveolar_sibilant.ogg'
import sound_ʃ from './IPA_audio/Voiceless_palato-alveolar_sibilant.ogg'
import sound_ʒ from './IPA_audio/Voiced_palato-alveolar_sibilant.ogg'
import sound_h from './IPA_audio/Voiceless_glottal_fricative.ogg'
import sound_w from './IPA_audio/Voiced_labio-velar_approximant.ogg'
import sound_ɹ from './IPA_audio/Alveolar_approximant.ogg'
import sound_j from './IPA_audio/Palatal_approximant.ogg'
import sound_l from './IPA_audio/Alveolar_lateral_approximant.ogg'
var playing_sounds = [];


function IPA_chart() {
  const sounds = {
    'p': sound_p,
    'b': sound_b,
    't': sound_t,
    'd': sound_d,
    'k': sound_k,
    'g': sound_g,
    'ʔ': sound_ʔ,
    'm': sound_m,
    'n': sound_n,
    'ŋ': sound_ŋ,
    'ɾ': sound_ɾ,
    'tʃ': sound_tʃ,
    'dʒ': sound_dʒ,
    'f': sound_f,
    'v': sound_v,
    'θ': sound_θ,
    'ð': sound_ð,
    's': sound_s,
    'z': sound_z,
    'ʃ': sound_ʃ,
    'ʒ': sound_ʒ,
    'h': sound_h,
    'w':sound_w,
    'ɹ':sound_ɹ,
    'j':sound_j,
    'l': sound_l,
  };

  function play(character) {
    const sound = sounds[character];

    console.log(sound)
    if (sound) {
      const audio = new Audio(sound)
      playing_sounds.push(audio)
      audio.addEventListener('ended', () => {
            playing_sounds.length = 0;
    });
      if((playing_sounds.length) === 1) {
        audio.play()
      } 
    } else {
      console.error('Sound not found for character:', character);
    }
  }

  return (
  <>
  <table>
    <caption>
      <h2>English Consonants</h2>
    </caption>
    <tr>
      <th></th>
      <th colspan="2">Bilabial</th>
      <th colspan ="2">Labiodental</th>
      <th colspan ="2">Dental</th>
      <th colspan ="2">Alveolar</th>
      <th colspan ="2">Postalveolar</th>
      <th colspan ="2">Palatal</th>
      <th colspan ="2">Velar</th>
      <th colspan ="2">Glotal</th>
    </tr>
    <tr>
      <td>Plosive</td>
      <td onClick={() => play('p')}>p</td>
      <td onClick={() => play('b')}>b</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('t')}>t</td>
      <td onClick={() => play('d')}>d</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('k')}>k</td>
      <td onClick={() => play('g')}>g</td>
      <td onClick={() => play('ʔ')}>ʔ</td>
      <td></td>
    </tr>
    <tr>
      <td>Nasal</td>
      <td></td>
      <td onClick={() => play('m')}>m</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('n')}>n</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('ŋ')}>ŋ</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Tap or Flap</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('ɾ')}>ɾ</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Affricative</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('tʃ')}>tʃ</td>
      <td onClick={() => play('dʒ')}>dʒ</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Fricative</td>
      <td></td>
      <td></td>
      <td onClick={() => play('f')}>f</td>
      <td onClick={() => play('v')}>v</td>
      <td onClick={() => play('θ')}>θ</td>
      <td onClick={() => play('ð')}>ð</td>
      <td onClick={() => play('s')}>s</td>
      <td onClick={() => play('z')}>z</td>
      <td onClick={() => play('ʃ')}>ʃ</td>
      <td onClick={() => play('ʒ')}>ʒ</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('h')}>h</td>
      <td></td>
    </tr>
    <tr>
      <td>Approximant</td>
      <td></td>
      <td onClick={() => play('w')}>w</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('ɹ')}>ɹ</td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('j')}>j</td>
      <td></td>
      <td onClick={() => play('w')}>w</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Lateral Approximant</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td onClick={() => play('l')}>l</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
  <small>
    The symbols to the right are voiced, left are voiceless.
  </small>
  </>
  );
}

export default IPA_chart;
