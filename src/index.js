import './style.css';
import tooltip from './data'


const updatedToolTips = new tooltip(document.querySelectorAll('.controls input'));
updatedToolTips.init();

