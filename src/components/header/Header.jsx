import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { API } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        // Remove tokens from local storage and session storage
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        console.log('Tokens removed from storage');
        
        // Redirect to login page
        navigate('/account');
    };

    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account' onClick={logout}>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;
