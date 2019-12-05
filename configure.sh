#!/usr/bin/env bash

configure(){
    dest=$(pwd)/.env.$env

    # Wordpress
    printf "\n\nConfiguring Wordpress related variables:\n\n"

    read -p "Default API Endpoint [https://thesmartwallet.com/wp-json/wp/v2]: " $default_api_endpoint
    default_api_endpoint=${default_api_endpoint:-https://thesmartwallet.com/wp-json/wp/v2}
    sed -i "" "s|##REACT_APP_DEFAULT_ENDPOINT##|$default_api_endpoint|g" $dest

    read -p "Default Wordpress Tag [microsite]: " $default_site_tag
    default_site_tag=${default_site_tag:-microsite}
    sed -i "" "s|##REACT_APP_DEFAULT_SITETAG##|$default_site_tag|g" $dest

    read -p "Default Wordpress Tag ID [1355]: " $default_tag_id
    default_tag_id=${default_tag_id:-1355}
    sed -i "" "s|##REACT_APP_DEFAULT_TAG_ID##|$default_tag_id|g" $dest

    read -p "Default Wordpress Category IDs (Comma Separated - No Spaces) [30,31,33]: " $posts_category_ids
    posts_category_ids=${posts_category_ids:-30,31,33}
    sed -i "" "s|##REACT_APP_DEFAULT_CATEGORY_IDS##|$posts_category_ids|g" $dest

    read -p "Default Privacy Policy Page ID [711]: " $privacy_policy_id
    privacy_policy_id=${privacy_policy_id:-711}
    sed -i "" "s|##REACT_APP_DEFAULT_PRIVACY_POLICY_ID##|$privacy_policy_id|g" $dest

    read -p "Default Terms & Conditions Page ID [713]: " $terms_conditions_id
    terms_conditions_id=${terms_conditions_id:-713}
    sed -i "" "s|##REACT_APP_DEFAULT_TERMS_CONDITIONS_ID##|$terms_conditions_id|g" $dest

    read -p "Max Posts per Page [12]: " $posts_per_page
    posts_per_page=${posts_per_page:-12}
    sed -i "" "s|##REACT_APP_DEFAULT_POSTS_PER_PAGE##|$posts_per_page|g" $dest


    # Theme
    printf "\n\nConfiguring Theme related variables:\n\n"

    read -p "Main Logo Source (Relative Path) [logo-main.svg]: " $default_main_logo
    default_main_logo=${default_main_logo:-logo-main.svg}
    sed -i "" "s|##REACT_APP_DEFAULT_LOGO_MAIN##|$default_main_logo|g" $dest

    read -p "Alt Logo Source (Relative Path) [logo-white.svg]: " $default_alt_logo
    default_alt_logo=${default_alt_logo:-logo-white.svg}
    sed -i "" "s|##REACT_APP_DEFAULT_LOGO_ALT##|$default_alt_logo|g" $dest

    read -p "Icon Logo Source (Relative Path) [short-logo.svg]: " $default_icon_logo
    default_icon_logo=${default_icon_logo:-short-logo.svg}
    sed -i "" "s|##REACT_APP_DEFAULT_LOGO_ICON##|$default_icon_logo|g" $dest

    read -p "Primary Theme Color (Valid CSS) [#19405E]: " $primary_theme_color
    primary_theme_color=${primary_theme_color:-#19405E}
    sed -i "" "s|##REACT_APP_DEFAULT_PRIMARY_THEME_COLOR##|$primary_theme_color|g" $dest

    read -p "Secondary Theme Color (Valid CSS) [#196B93]: " $secondary_theme_color
    secondary_theme_color=${secondary_theme_color:-#196B93}
    sed -i "" "s|##REACT_APP_DEFAULT_SECONDARY_THEME_COLOR##|$secondary_theme_color|g" $dest

    read -p "Tertiary Theme Color (Valid CSS) [#FFAE34]: " $tertiary_theme_color
    tertiary_theme_color=${tertiary_theme_color:-#FFAE34}
    sed -i "" "s|##REACT_APP_DEFAULT_TERTIARY_THEME_COLOR##|$tertiary_theme_color|g" $dest

    read -p "Header Text Color (Valid CSS) [#494949]: " $header_text_color
    header_text_color=${header_text_color:-#494949}
    sed -i "" "s|##REACT_APP_DEFAULT_HEADER_TEXT_COLOR##|$header_text_color|g" $dest

    read -p "Body Text Color (Valid CSS) [#494949]: " $body_text_color
    body_text_color=${body_text_color:-#494949}
    sed -i "" "s|##REACT_APP_DEFAULT_BODY_TEXT_COLOR##|$body_text_color|g" $dest

    read -p "Header Font Family (Valid CSS) ['Poppins', sans-serif]: " $header_font_family
    header_font_family=${header_font_family:-"'Poppins', sans-serif"}
    sed -i "" "s|##REACT_APP_DEFAULT_HEADER_FONT##|$header_font_family|g" $dest

    read -p "Body Font Family (Valid CSS) ['Open Sans', sans-serif]: " $body_font_family
    body_font_family=${body_font_family:-"'Open Sans', sans-serif"}
    sed -i "" "s|##REACT_APP_DEFAULT_BODY_FONT##|$body_font_family|g" $dest


    # Meta
    printf "\n\nConfiguring Meta related variables:\n\n"

    read -p "Default Meta Title [Make Better Money]: " $default_meta_title
    default_meta_title=${default_meta_title:-"Make Better Money"}
    sed -i "" "s|##REACT_APP_DEFAULT_TITLE##|$default_meta_title|g" $dest

    read -p "Default Meta Description [$default_meta_title]: " $default_meta_description
    default_meta_description=${default_meta_description:-"$default_meta_title"}
    sed -i "" "s|##REACT_APP_DEFAULT_DESCRIPTION##|$default_meta_description|g" $dest

    read -p "Default Meta Keywords [ ]: " $default_meta_keywords
    default_meta_keywords=${default_meta_keywords:-""}
    sed -i "" "s|##REACT_APP_DEFAULT_KEYWORDS##|$default_meta_keywords|g" $dest

    read -p "Default Meta Subject [ ]: " $default_meta_subject
    default_meta_subject=${default_meta_subject:-""}
    sed -i "" "s|##REACT_APP_DEFAULT_SUBJECT##|$default_meta_subject|g" $dest

    read -p "Default Meta Robots [noindex, nofollow]: " $default_meta_robots
    default_meta_robots=${default_meta_robots:-"$default_meta_robots"}
    sed -i "" "s|##REACT_APP_DEFAULT_ROBOTS##|$default_meta_robots|g" $dest

    read -p "Default Meta Sitename [$default_meta_title]: " $default_meta_sitename
    default_meta_sitename=${default_meta_sitename:-"$default_meta_title"}
    sed -i "" "s|##REACT_APP_DEFAULT_SITENAME##|$default_meta_sitename|g" $dest

    read -p "Default Meta Type [ ]: " $default_meta_type
    default_meta_type=${default_meta_type:-""}
    sed -i "" "s|##REACT_APP_DEFAULT_TYPE##|$default_meta_type|g" $dest

    read -p "Default Site URL [https://makebettermoney.com]: " $default_site_url
    default_site_url=${default_site_url:-"https://makebettermoney.com"}
    sed -i "" "s|##REACT_APP_DEFAULT_URL##|$default_site_url|g" $dest


    # Google Tag Manager
    printf "\n\nConfiguring Google Tag Manager:\n\n"

    read -p "Default GTM Site ID [GTM-MPF9GCN]: " $default_gtm_id
    default_gtm_id=${default_gtm_id:-"GTM-MPF9GCN"}
    sed -i "" "s|##REACT_APP_DEFAULT_GTM_SITE_ID##|$default_gtm_id|g" $dest


    # AWS
    printf "\n\nConfiguring AWS for Deployment:\n\n"

    read -p "Default AWS Bucket [tsw-microsites-bucket]: " $default_aws_bucket
    default_aws_bucket=${default_aws_bucket:-"tsw-microsites-bucket"}
    sed -i "" "s|##REACT_APP_DEFAULT_GTM_SITE_ID##|$default_aws_bucket|g" $dest

    read -p "Default Bucket Directory [making-better-money]: " $default_bucket_directory
    default_bucket_directory=${default_bucket_directory:-"making-better-money"}
    sed -i "" "s|##REACT_APP_DEFAULT_AWS_DIRECTORY##|$default_bucket_directory|g" $dest


    printf "\nEnvironment Configured!\n"
}
