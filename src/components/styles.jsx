module.exports = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header : {
        position: 'fixed', 
        width: '100vw',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },

    footer : {
        position: 'fixed', 
        width: '100vw', 
        bottom: '0',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },

    footerTtitle :{
        textAlign: 'center', 
        color: '#010101', 
        fontSize: '1rem', 
        fontWeight: 'lighter'
    },
    
    row: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        minHeight: '40px',
        padding: '15px',
        marginTop: '15px',
        width: '100%',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },

    btn: {
        marginRight: '5px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },

    btnClear: {
        width: '60%',
        marginTop: '15px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    }
}
