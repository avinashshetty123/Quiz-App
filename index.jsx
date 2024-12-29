
import { createRoot } from 'react-dom/client';
import App from './components/App';
import {Contextapi} from './components/Contextapi';
const root=createRoot(document.getElementById('root'));

    root.render(
    <Contextapi>
        <App/>
    </Contextapi>
)


