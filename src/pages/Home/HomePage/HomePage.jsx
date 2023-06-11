import { Helmet } from 'react-helmet-async';

const HomePage = () => {
    return (
        <div>
            <Helmet>
        <title>Samurai Summer Camp | Home</title>
      </Helmet>
            <h2 className="text-2xl">this is home page</h2>
        </div>
    );
};

export default HomePage;