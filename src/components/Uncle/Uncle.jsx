import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex"> 
                <Cousin>Nabil</Cousin>
                <Cousin>Nabina</Cousin>
            </section>
        </div>
    );
};

export default Uncle;