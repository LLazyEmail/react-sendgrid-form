import { useRouter } from 'next/router';

const Baa = () => {
    const router = useRouter();
    const { forms } = router.query;
    console.log('Forms', forms);

    return (
        <div>
            
        </div>
    )
}

export default Baa;
