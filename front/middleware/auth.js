export default function({store, redirect}) {
    if (!localStorage['token'])
        redirect('/login')
}
