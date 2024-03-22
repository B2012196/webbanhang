import Header from '../components/Header'
const DefaultLayout = ({children}) => {
    return ( 
        <>
            <Header></Header>
            <div>
                <div>{children}</div>
            </div>

        </>
     );
}
 
export default DefaultLayout;