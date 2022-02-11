import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'reset-css';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </RecoilRoot>
    </QueryClientProvider>,
    document.getElementById('root')
);

reportWebVitals();
