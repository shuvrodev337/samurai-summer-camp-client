import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/sectionTitle";

const AdminHome = () => {
    return (
        <div>
            <SectionTitle sectionHeading={'Admin Home'}></SectionTitle>
            {/* <Helmet>
        <title>Samurai Camp | Admin | Home</title>
      </Helmet> */}
        </div>
    );
};

export default AdminHome;