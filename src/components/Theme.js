function Theme({ children, themeName }) {
    return <div className={themeName}>{children}</div>
}

export default Theme;