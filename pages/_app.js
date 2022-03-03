import DynamicTina  from '../.tina/components/TinaDynamicProvider'

const App = ({ Component, pageProps }) => {
  return (
    <DynamicTina>
        <Component {...pageProps} />
    </DynamicTina>
  );
};

export default App;
