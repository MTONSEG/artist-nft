import log from 'fancy-log';
import { stream as critical } from "critical";


export const criticalStyles = () => {
	return app.gulp.src('docs/product.html')
		.pipe(
			critical({
				base: 'docs/',
				inline: true,
				css: ['docs/css/style.min.css'],
				penthouse: {
					timeout: 4500,
				}
			})
		)
		.on('error', err => {
			log.error(err.message);
		})
		.pipe(app.gulp.dest(app.path.build.html))
}