    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nama = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMsg = document.getElementsByClassName('errorMsg');
        const successMsg = document.getElementById('successMsg');
        for (let i = 0; i < errorMsg.length; i++) {
            errorMsg[i].textContent = '';
        }
        // Nama lengkap validation
        if (nama.trim() === '') {
            document.getElementById('name').focus();
            errorMsg[0].textContent = 'Nama lengkap tidak boleh kosong.';
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('email').focus();
            errorMsg[1].textContent = 'Email harus berformat valid.';
            return;
        }

        // Password length validation
        if (password.length < 8) {
            document.getElementById('password').focus();
            errorMsg[2].textContent = 'Password harus terdiri dari minimal 8 karakter.';
            return;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            document.getElementById('confirmPassword').focus();
            errorMsg[3].textContent = 'Password dan konfirmasi password harus cocok.';
            return;
        }

        // If all validations pass
        successMsg.textContent = 'Pendaftaran Berhasil!';
        // You can proceed with form submission here
    });