import tar from "tar";

export const pack = (source: string, archive: string) => {
	return tar.c({
		gzip: true,
		file: archive,
		portable: true,
	}, [source]);
};
