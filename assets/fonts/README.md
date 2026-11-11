# Social card fonts

Inter and Newsreader are licensed under the SIL Open Font License; licenses are included here.
Sources: https://github.com/google/fonts/tree/main/ofl/inter and https://github.com/google/fonts/tree/main/ofl/newsreader.

These files are static regular (weight 400) instances of the upstream variable fonts, with all other axes at their defaults. Static instances avoid the ImageResponse/OpenType variable-font parser limitation. They are used for build-time social cards only; website font loading remains unchanged.

To regenerate: use fontTools.varLib.instancer on the upstream TTF, setting every axis to its default and `wght` to 400. Keep the OFL notices with the output.
