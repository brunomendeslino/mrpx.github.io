import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import AOS from 'aos';

const API_KEY = 'AIzaSyBLYGua_ClWmj8Bxixj4jyCP7C5wW6NHYU';
const VIDEO_FOLDER_ID = '1u5nNK40JDCXZmUb7Xj5GIFVCHDj7j1Kx';
const THUMBNAIL_FOLDER_ID = '1FtZNH5NCOUcUaN8BsgsFuEcDg-RY4hzd';

const Gallery = () => {
	const [videos, setVideos] = useState([]);
	const [thumbnails, setThumbnails] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeVideo, setActiveVideo] = useState(null);

	useEffect(() => {
		AOS.init();
		fetchFiles();
	}, []);

	const fetchFiles = async () => {
		try {
			const [videosRes, thumbsRes] = await Promise.all([fetchDriveFiles(VIDEO_FOLDER_ID), fetchDriveFiles(THUMBNAIL_FOLDER_ID)]);

			const videoList = sortByName(videosRes, 'Video_');
			const thumbList = sortByName(thumbsRes, 'Thumbnail_');
			setVideos(videoList);
			setThumbnails(thumbList);
		} catch (error) {
			console.error('Erro ao buscar arquivos do Google Drive:', error);
		}
	};

	const fetchDriveFiles = async folderId => {
		const res = await axios.get('https://www.googleapis.com/drive/v3/files', {
			params: {
				key: API_KEY,
				q: `'${folderId}' in parents and trashed = false`,
				fields: 'files(id, name, mimeType, description)', // include description!
			},
		});
		return res.data.files;
	};

	const sortByName = (files, prefix) => {
		return files
			.filter(file => file.name.toLowerCase().startsWith(prefix.toLowerCase()))
			.sort((a, b) => {
				const aNum = parseInt(a.name.match(/\d+/)?.[0], 10);
				const bNum = parseInt(b.name.match(/\d+/)?.[0], 10);
				return aNum - bNum;
			});
	};

	const getFileUrl = fileId => `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${API_KEY}`;

	const handleVideoClick = videoId => {
		setActiveVideo(getFileUrl(videoId));
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
		setActiveVideo(null);
	};

	useEffect(() => {
		console.log('Video count:', videos.length);
		console.log('Thumbnail count:', thumbnails.length);
	}, [videos, thumbnails]);

	return (
		<div className='gallery__container'>
			<div className='gallery__container__header'>
				<h2 className='gallery__container__header__h2'>
					Each project merges technology and creativity, transforming concepts into fluid, dynamic visuals. <br />
					<br />
					From experimental video compositions to immersive animations, I focus on precision in storytelling. <br />
					<br />
					Here are some examples of what I can do:
				</h2>
			</div>

			<div className='gallery__container__grid'>
				{videos.map((video, index) => (
					<div data-aos='fade-up' data-aos-delay='530' key={video.id} className='gallery__container__grid__item' onClick={() => handleVideoClick(video.id)}>
						<img src={thumbnails[index] ? getFileUrl(thumbnails[index].id) : ''} alt={`Thumbnail ${index + 1}`} className='gallery__container__grid__item__thumbnail' />
						<div className='gallery__container__grid__item__description'>
							<p className='gallery__container__grid__item__description__p'>{video.description || 'No description'}</p>
						</div>
					</div>
				))}
			</div>

			{isModalOpen && <Modal videoSrc={activeVideo} Close={handleModalClose} />}
		</div>
	);
};

export default Gallery;
