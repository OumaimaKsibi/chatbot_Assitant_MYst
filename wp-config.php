<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'chatbot' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')<X*(2h!X2S}ZzrTGf=nau=q;R?I49:g@$ei|V,^?_X0q1l4R)M @0}Ga)gt 9d:' );
define( 'SECURE_AUTH_KEY',  '$4f#O <.!U;ff#8F6TvSmiBQDvg$]s|l>{(%z<ze-#Y_ Cj9:. 2no@<@cJDv>Kj' );
define( 'LOGGED_IN_KEY',    '<luQ^g~yZ[<vw9]:CCP-?yApk_wt>54r[{]ay1W0| |<sn_yYJ{tNrP+YX.pl2H ' );
define( 'NONCE_KEY',        'Q}5A_k}X)&RFd*Qct|mo7#n2:)~%x%R8{`+,^;$$(johqZJOG W*eAfH;0Q>wB# ' );
define( 'AUTH_SALT',        ';>#U%v&;fwk0O|rpR<l%~g;y-PKvgTP-Ka1#r2t51AZt?UfzX^1><xo3!ZdHmA#M' );
define( 'SECURE_AUTH_SALT', ',8<u8}v9xkFxlW$c(cC!o=X;2URd0V%[w{tOih>h,HV#1!q@ P ahUr!rd|kfO*t' );
define( 'LOGGED_IN_SALT',   'q2BZ$p^/f#QNe_i@1>ucD?[L 6SNkMKEBT?k3&mQ>l|+JwEbeA~k[`PE$GXzF=t@' );
define( 'NONCE_SALT',       'i9)B/r?,qB;I%UEC|dq?q-=<a,QHr1^WZbI0oS/iJV4,9@]$=g=y;*Du7Bu4WcPR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
