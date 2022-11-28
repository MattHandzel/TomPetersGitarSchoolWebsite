import "./ContactIcons.css"

function GmailIcon(){
    return(
        <a className="contactIcon" href="mailto:tom@tpgs.com"><i className="fa-solid fa-envelope"></i></a>
    )
}
function PhoneIcon(){
    return(
        <a className="contactIcon" href="tel:815-325-4701"><i className="fa-solid fa-phone"></i></a>
    )
}

function HouseIcon(){
    return(
        <i class="fa-solid fa-house"></i>
    )
}

export {GmailIcon, PhoneIcon, HouseIcon};