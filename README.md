# Aturan Penamaan

1. Nama table 

    Plural. Contoh: users, messages, userMatches, etc
2. Nama Enum

    Singular. Contoh: faculty, gender, campus, etc. 

# What to Do Kalo Update Schema

1. Generate migrations file

    ```sh
    $yarn drizzle-kit generate
    ```

2. Build

    ```sh
    $yarn build
    ```

3. Update commit hashtag di package.json repo dikpus / social