const Footer = () => {
    return (
        <footer className="bg-[#007979] text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Foldr. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                    <a href="#" className="text-sm hover:underline">Terms of Service</a>
                    <a href="#" className="text-sm hover:underline">Contact Us</a>
                </div>
            </div>

        </footer> 
    )
}

export default Footer;