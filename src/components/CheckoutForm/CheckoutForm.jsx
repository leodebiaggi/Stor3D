import './CheckoutForm.css'
import { useState, useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isValid = name !== '' && surname !== '' && phone !== '' && email !== '' && email === confirmEmail
        setIsFormValid(isValid)
    }, [name, surname, phone, email, confirmEmail])

    useEffect(() => {
        if (user) {
            const displayName = user.displayName || '';
            const [firstName, lastName] = displayName.split(' ');
            setName(firstName);
            setSurname(lastName);
            setEmail(user.email || '');
            setConfirmEmail(user.email || '');
        }
    }, [user]);

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, surname, phone, email, confirmEmail
        }

        onConfirm(userData)
    }

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre:
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        disabled={user !== null}
                    />
                </label>
                <label className='Label'>
                    Apellido:
                    <input
                        className='Input'
                        type='text'
                        value={surname}
                        onChange={({ target }) => setSurname(target.value)}
                        disabled={user !== null}
                    />
                </label>
                <label className='Label'>
                    Correo Electrónico:
                    <input
                        className='Input'
                        type='text'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        disabled={user !== null}
                    />
                </label>
                <label className='Label'>
                    Re-ingresá tu correo electrónico:
                    <input
                        className='Input'
                        type='text'
                        value={confirmEmail}
                        onChange={({ target }) => setConfirmEmail(target.value)}
                        disabled={user !== null}
                    />
                </label>

                <label className='Label'>
                    Teléfono de contacto:
                    <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className={`ButtonCheckOut ${isFormValid ? 'Active' : ''}`} disabled={!isFormValid}>Finalizar Compra</button>
                </div>
                <div className='Label'>
                    <button type='button' className='ButtonLogin' onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm

